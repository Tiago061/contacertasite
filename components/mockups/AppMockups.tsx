import {
  ArrowDownLeft,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Clock3,
  House,
  ReceiptText,
  Settings2,
  ShieldCheck,
  Signal,
  Wifi,
  BatteryFull,
  Heart,
  CreditCard,
  Zap,
  Repeat2,
} from "lucide-react";
export function AppTabs({ active = "Início" }: { active?: string }) {
  return (
    <div className="mockup-tabs" aria-hidden="true">
      {(
        [
          ["Início", House],
          ["Contas", ReceiptText],
          ["Calendário", CalendarDays],
          ["Ajustes", Settings2],
        ] as const
      ).map(([label, Icon]) => (
        <div key={label} className={active === label ? "selected" : ""}>
          <Icon size={18} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
export function Balance({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`mockup-balance ${compact ? "compact" : ""}`}>
      <div>
        <span>
          <ArrowUpRight size={12} /> Falta pagar este mês
        </span>
        <span>OUTUBRO</span>
      </div>
      <strong>
        R$ 745<span>,25</span>
      </strong>
      <p>4 contas para deixar tudo em dia</p>
      <div className="mockup-progress-label">
        <span>Seu progresso</span>
        <span>73% concluído</span>
      </div>
      <div className="mockup-progress">
        <i />
      </div>
      <footer>
        <span>
          <CircleCheck size={11} />
          R$ 1.991,80 pagos
        </span>
        <span>de R$ 2.737,05</span>
      </footer>
    </div>
  );
}
export function MiniBill({
  name,
  category,
  value,
  date,
  kind = "wifi",
  paid = false,
}: {
  name: string;
  category: string;
  value: string;
  date: string;
  kind?: "wifi" | "heart" | "card" | "zap";
  paid?: boolean;
}) {
  const Icon = { wifi: Wifi, heart: Heart, card: CreditCard, zap: Zap }[kind];
  return (
    <div className="mini-bill">
      <span className={`mini-category ${kind}`}>
        <Icon size={17} />
      </span>
      <div>
        <strong>{name}</strong>
        <span>
          {category} · {date}
        </span>
      </div>
      <div>
        <strong>R$ {value}</strong>
        <span className={paid ? "is-paid" : ""}>
          {paid ? "Paga" : "Pendente"}
        </span>
      </div>
    </div>
  );
}
export function PhoneMockup() {
  return (
    <div className="phone-stage">
      <div className="phone-halo" />
      <div
        className="phone-frame"
        role="img"
        aria-label="Exemplo ilustrativo do ContaCerta: R$ 745,25 pendentes no mês, 73% das contas pagas e próximos vencimentos organizados."
      >
        <div className="phone-screen">
          <div className="phone-status">
            <strong>9:41</strong>
            <div className="phone-speaker" />
            <span>
              <Signal size={12} />
              <Wifi size={13} />
              <BatteryFull size={16} />
            </span>
          </div>
          <div className="phone-content">
            <div className="mockup-eyebrow">SEU DINHEIRO, COM MAIS CLAREZA</div>
            <div className="mockup-greeting">
              Bom dia <span>☀</span>
            </div>
            <p className="mockup-subtitle">Contas em ordem. Mente tranquila.</p>
            <div className="mockup-month">
              <strong>Outubro de 2026</strong>
              <span>
                <ChevronLeft size={14} />
                <ChevronRight size={14} />
              </span>
            </div>
            <Balance />
            <div className="mockup-stats">
              <div>
                <span className="green-icon">
                  <ArrowDownLeft size={14} />
                </span>
                <small>Total pago</small>
                <strong>R$ 1.991,80</strong>
              </div>
              <div>
                <span className="blue-icon">
                  <Clock3 size={14} />
                </span>
                <small>Pendentes</small>
                <strong>
                  4 <small>contas</small>
                </strong>
              </div>
            </div>
            <div className="mockup-section-heading">
              Próximos vencimentos
              <span>
                Ver todas
                <ChevronRight size={10} />
              </span>
            </div>
            <div className="mockup-bill-card">
              <MiniBill
                name="Energia elétrica"
                category="Serviços"
                value="186,45"
                date="18 out"
                kind="zap"
              />
              <MiniBill
                name="Academia"
                category="Saúde"
                value="129,90"
                date="22 out"
                kind="heart"
              />
            </div>
          </div>
          <AppTabs />
          <div className="phone-home-indicator" />
        </div>
      </div>
      <div className="floating-note note-payment">
        <span>
          <Check size={18} />
        </span>
        <div>
          <strong>Pagamento registrado</strong>
          <small>Internet fibra · R$ 119,90</small>
        </div>
        <span className="note-tiny-dot" />
      </div>
      <div className="floating-note note-calm">
        <span className="calm-icon">
          <ShieldCheck size={20} />
        </span>
        <div>
          <strong>Você no controle.</strong>
          <small>Uma conta de cada vez.</small>
        </div>
      </div>
      <span className="mockup-caption">
        Interface ilustrativa com dados de demonstração.
      </span>
    </div>
  );
}
export function OverviewMockup() {
  return (
    <div
      className="overview-stage"
      role="img"
      aria-label="Exemplo do resumo mensal e contas organizadas por categoria"
    >
      <div className="preview-top">
        <span className="preview-brand">
          <Check size={15} />
          ContaCerta
        </span>
        <span>Seu resumo mensal</span>
        <span className="preview-avatar">CC</span>
      </div>
      <div className="overview-body">
        <div className="overview-title">
          <div>
            <small>OUTUBRO DE 2026</small>
            <h3>Um mês mais organizado.</h3>
          </div>
          <span className="overview-icon">
            <ReceiptText size={22} />
          </span>
        </div>
        <Balance compact />
        <div className="overview-categories">
          <span>SEUS GASTOS POR CATEGORIA</span>
          <div>
            <span>
              <i />
              Moradia
            </span>
            <strong>R$ 1.850,00</strong>
          </div>
          <div>
            <span>
              <i />
              Saúde
            </span>
            <strong>R$ 518,90</strong>
          </div>
          <div>
            <span>
              <i />
              Serviços
            </span>
            <strong>R$ 306,35</strong>
          </div>
        </div>
      </div>
      <div className="preview-bottom">
        <ShieldCheck size={13} />
        Seus dados ficam no seu dispositivo.
      </div>
    </div>
  );
}
export function CalendarMockup() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  return (
    <div
      className="calendar-preview"
      role="img"
      aria-label="Calendário ilustrativo de outubro, com vencimento selecionado no dia 18"
    >
      <div className="calendar-preview-title">
        <span>
          <CalendarDays size={19} />
          <strong>Seu calendário</strong>
        </span>
        <span>OUTUBRO</span>
      </div>
      <div className="calendar-preview-month">
        <h3>Outubro de 2026</h3>
        <span>
          <ChevronLeft size={15} />
          <ChevronRight size={15} />
        </span>
      </div>
      <div className="calendar-preview-grid">
        {["D", "S", "T", "Q", "Q", "S", "S"].map((d, i) => (
          <span className="calendar-weekday" key={`weekday-${i}`}>
            {d}
          </span>
        ))}
        {Array.from({ length: 4 }, (_, i) => (
          <span key={`blank-${i}`} />
        ))}
        {days.map((d) => (
          <div
            key={d}
            className={`${d === 18 ? "calendar-selected" : ""} ${[5, 10, 12].includes(d) ? "calendar-paid" : ""}`}
          >
            <span>{d}</span>
            {[5, 10, 12, 18, 22, 25, 28].includes(d) && <i />}
          </div>
        ))}
      </div>
      <div className="calendar-day-label">
        18 de outubro<span>1 conta</span>
      </div>
      <MiniBill
        name="Energia elétrica"
        category="Serviços"
        value="186,45"
        date="18 out"
        kind="zap"
      />
      <div className="calendar-footnote">
        <span />
        <p>Um olhar para o que vem. Sem surpresas.</p>
      </div>
    </div>
  );
}
export function HistoryPreview() {
  return (
    <div className="small-feature-preview">
      <span className="preview-check">
        <Check size={18} />
      </span>
      <div>
        <strong>Pagamento registrado</strong>
        <span>Internet fibra · 10 out</span>
      </div>
      <strong>R$ 119,90</strong>
    </div>
  );
}
export function RecurrencePreview() {
  return (
    <div className="recurrence-preview">
      <span>
        <Repeat2 size={15} />
        Recorrência
      </span>
      <strong>
        Todo mês
        <Check size={13} />
      </strong>
      <div className="recurrence-line">
        <span>
          OUT
          <i />
        </span>
        <span>
          NOV
          <i />
        </span>
        <span>
          DEZ
          <i />
        </span>
      </div>
    </div>
  );
}
