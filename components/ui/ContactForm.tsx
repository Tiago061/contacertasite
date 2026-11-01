"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, LoaderCircle, Send } from "lucide-react";
import { siteConfig } from "@/lib/config";
export function ContactForm() {
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [message, setMessage] = useState(""),
    [busy, setBusy] = useState(false),
    [status, setStatus] = useState(""),
    [error, setError] = useState(false),
    [copyFallback, setCopyFallback] = useState("");
  const canSend = !!(siteConfig.contactEndpoint || siteConfig.contactEmail);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    setStatus("");
    setBusy(true);
    const data = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };
    if (!data.name || !data.email || !data.message) {
      setError(true);
      setStatus("Preencha os campos para preparar sua mensagem.");
      setBusy(false);
      return;
    }
    try {
      if (siteConfig.contactEndpoint) {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 12000);
        try {
          const response = await fetch(siteConfig.contactEndpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(data),
            signal: controller.signal,
          });
          if (!response.ok) throw new Error("send");
          setStatus("Sua mensagem foi enviada ao canal de atendimento.");
          setName("");
          setEmail("");
          setMessage("");
        } finally {
          clearTimeout(timeout);
        }
      } else if (siteConfig.contactEmail) {
        window.location.href = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Contato pelo site ContaCerta")}&body=${encodeURIComponent(`Nome: ${data.name}\nE-mail: ${data.email}\n\n${data.message}`)}`;
        setStatus("Confirme o envio da mensagem no seu aplicativo de e-mail.");
      } else {
        const text = `Contato — ContaCerta\nNome: ${data.name}\nE-mail: ${data.email}\n\n${data.message}`;
        try {
          await navigator.clipboard.writeText(text);
          setStatus("Mensagem copiada. Nenhum envio foi realizado.");
        } catch {
          setCopyFallback(text);
          setStatus(
            "Selecione e copie a mensagem abaixo. Nenhum envio foi realizado.",
          );
        }
      }
    } catch {
      setError(true);
      setStatus(
        "Não foi possível enviar. Sua mensagem continua aqui para você tentar novamente.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <label htmlFor="contact-name">
        Seu nome
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          required
          maxLength={100}
          placeholder="Como podemos chamar você?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="contact-email">
        Seu e-mail
        <input
          id="contact-email"
          name="email"
          autoComplete="email"
          type="email"
          required
          maxLength={254}
          placeholder="voce@exemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="contact-message">
        Sua mensagem
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          placeholder="Conte um pouco sobre sua dúvida ou ideia."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <p className="form-privacy">
        {canSend
          ? "Envie apenas as informações necessárias para o atendimento. Não inclua dados bancários ou informações de contas."
          : "O canal de atendimento está em preparação. Por enquanto, você pode copiar sua mensagem; ela não será enviada."}
      </p>
      <button className="button contact-submit" type="submit" disabled={busy}>
        {busy ? (
          <LoaderCircle size={17} className="loading-icon" />
        ) : canSend ? (
          <Send size={17} />
        ) : (
          <Copy size={17} />
        )}{" "}
        {busy ? "Preparando…" : canSend ? "Enviar mensagem" : "Copiar mensagem"}
        <ArrowUpRight size={16} />
      </button>
      {status && (
        <p
          className={`form-status ${error ? "error" : ""}`}
          role={error ? "alert" : "status"}
        >
          {!error && <Check size={16} />} {status}
        </p>
      )}
      {copyFallback && (
        <label className="copy-fallback">
          Mensagem pronta para copiar
          <textarea
            readOnly
            value={copyFallback}
            onFocus={(e) => e.target.select()}
            rows={7}
          />
        </label>
      )}
    </form>
  );
}
