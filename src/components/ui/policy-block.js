import { RadioInput } from "@/components/ui/radio-input";

export function PolicyBlock() {
  return (
    <div className="policy_block">
      <div className="form_radio_block">
        <label className="radio_policy_1">
          <RadioInput
            className="opt_in_label"
            type="radio"
            name="consent"
            value="opt-in"
            required
          />
          Opt-in
        </label>
        <label className="radio_policy">
          <RadioInput type="radio" name="consent" value="opt-out" />
          Opt-out
        </label>
      </div>
      <span className="policy_text">
        By submitting this form above I consent to SMART HVAC LLC contact me via
        texts, phone, emails and voicemails for promotions, marketing messages &
        offers even if I’m on any DNC registries and use an automatic phone
        dialing system. I agree to the{" "}
        <a
          href="https://smarthvacllc.s3.us-east-1.amazonaws.com/Privacy+Policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          privacy policy
        </a>{" "}
        and{" "}
        <a
          href="https://smarthvacllc.s3.us-east-1.amazonaws.com/Web+Site+Terms+and+Conditions+of+Use.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          terms & conditions
        </a>
        Message frequency varies; Message & Data rates may apply. Text STOP
        anytime to unsubscribe.
      </span>
    </div>
  );
}
