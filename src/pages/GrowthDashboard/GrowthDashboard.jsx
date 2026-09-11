import { useEffect, useMemo, useState } from 'react'
import QRCode from 'react-qr-code'
import './GrowthDashboard.css'

const CASH_TAG = '$LuanHunt'
const CASH_APP_URL = 'https://cash.app/$LuanHunt'

const PHASES = [
  {
    id: 'phase1',
    number: 1,
    name: 'Transit & Field Operations',
    target: 250,
    purpose:
      'Securing local mobility resources and baseline infrastructure to remain 100% self-reliant.',
  },
  {
    id: 'phase2',
    number: 2,
    name: 'Tech Stack & Crucial Eye Surgery Fund',
    target: 950,
    purpose:
      'Funding critical developer IDE environments, secure deployment infrastructure, and medical costs associated with an upcoming eye procedure to remove emulsified silicone oil. Protecting my long-term vision is directly tied to my ability to continue building, coding, serving clients, and scaling Techuvo.',
  },
  {
    id: 'phase3',
    number: 3,
    name: 'Corporate Scale & Client Acquisition',
    target: 1300,
    purpose:
      'Deploying localized B2B marketing systems to rapidly scale and acquire Grand Rapids small business clients.',
  },
]

const DEFAULT_FUNDS = {
  phase1: 0,
  phase2: 0,
  phase3: 0,
}

function GrowthDashboard() {
  const [funds, setFunds] = useState(() => {
    const saved = localStorage.getItem('techuvo-growth-funds')

    if (!saved) return DEFAULT_FUNDS

    try {
      const parsed = JSON.parse(saved)

      return {
        phase1: Number(parsed.phase1) || 0,
        phase2: Number(parsed.phase2) || 0,
        phase3: Number(parsed.phase3) || 0,
      }
    } catch {
      return DEFAULT_FUNDS
    }
  })

  const [selectedAmount, setSelectedAmount] = useState(50)

  useEffect(() => {
    localStorage.setItem(
      'techuvo-growth-funds',
      JSON.stringify(funds)
    )
  }, [funds])

  const totalCapital = useMemo(() => {
    return Object.values(funds).reduce(
      (total, amount) => total + amount,
      0
    )
  }, [funds])

  const phaseData = useMemo(() => {
    return PHASES.map((phase) => {
      const secured = funds[phase.id]
      const percent = Math.min(
        (secured / phase.target) * 100,
        100
      )

      return {
        ...phase,
        secured,
        percent,
      }
    })
  }, [funds])

  const addToFund = (fundId, amount) => {
    setFunds((current) => ({
      ...current,
      [fundId]: current[fundId] + amount,
    }))
  }

  const handleDrop = (event, fundId) => {
    event.preventDefault()

    const draggedAmount = Number(
      event.dataTransfer.getData('amount')
    )

    if (!Number.isFinite(draggedAmount)) return

    addToFund(fundId, draggedAmount)
  }

  const handleDragStart = (event, amount) => {
    event.dataTransfer.setData(
      'amount',
      amount.toString()
    )
  }

  const resetFund = (fundId) => {
    const phase = PHASES.find(
      (item) => item.id === fundId
    )

    const confirmed = window.confirm(
      `Reset ${phase?.name || 'this fund'} back to $0?`
    )

    if (!confirmed) return

    setFunds((current) => ({
      ...current,
      [fundId]: 0,
    }))
  }

  const resetAllFunds = () => {
    const confirmed = window.confirm(
      'Reset all Techuvo growth funding back to $0?'
    )

    if (confirmed) {
      setFunds(DEFAULT_FUNDS)
    }
  }

  return (
    <main className="growth-dashboard">
      <section className="growth-shell">

        {/* HEADER */}
        <header className="growth-header">
          <div>
            <div className="brand-mark">
              TECHUVO
            </div>

            <div className="founder-display">
              18-YEAR-OLD FOUNDER
            </div>

            <p className="brand-subtitle">
              Building Techuvo in public — B2B Web Development,
              Digital Infrastructure & Growth Systems
            </p>
          </div>

          <div className="trust-badges">
            <span className="trust-badge registered">
              🛡️ Registered LLC
            </span>

            <span className="trust-badge reviews">
              ⭐️ 9 Five-Star Reviews
            </span>
          </div>
        </header>

        {/* MAIN GRID */}
        <div className="growth-grid">

          {/* LEFT */}
          <section className="milestones-panel">

            <div className="section-eyebrow">
              CORPORATE GROWTH SYSTEM
            </div>

            <h1>
              Building the infrastructure
              <span> required to scale.</span>
            </h1>

            <p className="intro-copy">
              Transparent capital deployment across transportation,
              developer infrastructure, founder continuity,
              medical needs and client acquisition.
            </p>

            <div className="capital-total">
              <span>Total Capital Secured</span>

              <strong>
                ${totalCapital.toLocaleString()}
              </strong>

              <div className="target-copy">
                Current master target: $2,500
              </div>
            </div>

            <div className="phase-stack">
              {phaseData.map((phase) => (
                <article
                  className="phase-card"
                  key={phase.id}
                  onDragOver={(event) =>
                    event.preventDefault()
                  }
                  onDrop={(event) =>
                    handleDrop(event, phase.id)
                  }
                >
                  <div className="phase-top">
                    <div>
                      <span className="phase-number">
                        PHASE 0{phase.number}
                      </span>

                      <h2>{phase.name}</h2>
                    </div>

                    <div className="phase-value">
                      ${phase.secured.toLocaleString()}
                      <span>
                        {' '}
                        / ${phase.target.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${phase.percent}%`,
                      }}
                    />
                  </div>

                  <div className="phase-range">
                    <span>
                      {Math.round(phase.percent)}% funded
                    </span>

                    <span>
                      ${phase.target.toLocaleString()} target
                    </span>
                  </div>

                  <p>{phase.purpose}</p>

                  <div className="fund-action-row">
                    <button
                      className="allocate-button"
                      onClick={() =>
                        addToFund(
                          phase.id,
                          selectedAmount
                        )
                      }
                    >
                      Add ${selectedAmount}
                    </button>

                    <button
                      className="fund-reset-button"
                      onClick={() =>
                        resetFund(phase.id)
                      }
                    >
                      Reset fund
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* RIGHT */}
          <aside className="gateway-panel">

            <div className="gateway-label">
              CAPITAL GATEWAY
            </div>

            <h2>Support the build.</h2>

            <p className="gateway-description">
              Help Techuvo advance infrastructure,
              development capacity, founder continuity
              and client acquisition.
            </p>

            <div className="qr-container">
              <QRCode
                value={CASH_APP_URL}
                size={190}
                bgColor="#FFFFFF"
                fgColor="#0B0F19"
              />

              <span>
                Scan to open Cash App
              </span>
            </div>

            <a
              href={CASH_APP_URL}
              target="_blank"
              rel="noreferrer"
              className="cash-button"
            >
              Pay with Cash App
            </a>

            <div className="cash-tag">
              {CASH_TAG}
            </div>

            <div className="engagement-menu">

              <div className="engagement-item">
                <div>
                  <span>💼</span>

                  <div>
                    <strong>
                      B2B Site Sprint Pack
                    </strong>

                    <small>
                      First 20 available slots
                    </small>
                  </div>
                </div>

                <b>$100</b>
              </div>

              <div className="engagement-item">
                <div>
                  <span>☕</span>

                  <div>
                    <strong>
                      Venture Framework Support
                    </strong>

                    <small>
                      Support Techuvo's development
                    </small>
                  </div>
                </div>

                <b>$5–$50</b>
              </div>

              <div className="engagement-item">
                <div>
                  <span>📈</span>

                  <div>
                    <strong>
                      Early Network Registry
                    </strong>

                    <small>
                      Founders, operators and strategic connections
                    </small>
                  </div>
                </div>

                <b>OPEN</b>
              </div>
            </div>

            <div className="commitment-card">
              <span className="commitment-icon">
                🙂
              </span>

              <div>
                <span className="commitment-label">
                  OUR EXECUTION COMMITMENT
                </span>

                <p>
                  I don't look for handouts—I am ready to earn it.
                  Whether building platforms, serving businesses,
                  or onboarding new partners, I approach every
                  challenge with drive, discipline, accountability,
                  and a smile.
                </p>
              </div>
            </div>

          </aside>
        </div>

        {/* OPERATOR CONTROL */}
        <section className="operator-console">

          <div className="operator-heading">
            <span className="console-eyebrow">
              OPERATOR CONTROL
            </span>

            <p>
              Select an amount, then click a fund or drag
              the amount into the fund you want to update.
            </p>
          </div>

          <div className="capital-selector">
            {[5, 20, 50, 100, 500].map((amount) => (
              <button
                key={amount}
                draggable
                onDragStart={(event) =>
                  handleDragStart(event, amount)
                }
                onClick={() =>
                  setSelectedAmount(amount)
                }
                className={
                  selectedAmount === amount
                    ? 'capital-chip active'
                    : 'capital-chip'
                }
              >
                +${amount}
              </button>
            ))}
          </div>

          <div className="selected-capital">
            Selected allocation:
            <strong>
              ${selectedAmount}
            </strong>
          </div>

          <button
            className="reset-button"
            onClick={resetAllFunds}
          >
            Reset All
          </button>

        </section>

      </section>
    </main>
  )
}

export default GrowthDashboard