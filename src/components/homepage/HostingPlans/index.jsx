import { DISPLAY_LANG } from '../../../config';
import './HostingPlans.css';

export default function HostingPlans({ hostingData, billingType, setBillingType }) {
  return (
    <div className="hosting-plans wrapper">
      <h2>{hostingData.heading.title}</h2>
      <p>{hostingData.heading.subtitle}</p>

      <div className="choose-paying-way flex-center">
        <span>{hostingData.heading.plan_billing_option.split('/')[0]}</span>

        <label className="switch">
          <input
            type="checkbox"
            checked={billingType === "/year"}
            onChange={() => setBillingType(billingType === "/month" ? "/year" : "/month")}
          />

          <span className="slider"></span>
        </label>

        <span>{hostingData.heading.plan_billing_option.split('/')[1]}</span>
      </div>

      <div className="plans flex-center">
        {
          hostingData.plans.map(plan => (
            <div
              key={plan.id}
              className={`plan ${plan.is_highlighted ? "active" : ""}`}
            >
              {plan.sale && <div className="sale">{plan.sale}</div>}
              <h3>{plan.name}</h3>

              <div className="includes">
                {
                  plan.features.map((feature, i) => (
                    <p
                      key={i}
                      className={`flex-center ${feature.active ? "active" : ""}`}
                    >
                      <img
                        src={
                          feature.active
                            ? plan.is_highlighted
                              ? "/images/hosting_plans/check-white.svg"
                              : "/images/hosting_plans/check-active.svg"
                            : "/images/hosting_plans/check-disabled.svg"
                        }
                        alt="check"
                      />
                      {feature.text}
                    </p>
                  ))
                }
              </div>

              <p className="price">
                {plan.price} <span>{plan.billing}</span>
              </p>

              <a href="#" className="btn">
                {
                  DISPLAY_LANG === 'en'
                    ? 'Choose Plan'
                    : DISPLAY_LANG === 'ru'
                      ? 'Выбрать план'
                      : 'Ընտրեք Փաթեթը'
                }
              </a>
            </div>
          ))
        }
      </div>

      <div className="fingerslide">
        <img src="/images/hosting_plans/finger-slide.gif" alt="finger-slide" />
      </div>
    </div>
  );
}