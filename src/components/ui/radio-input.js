export const RadioInput = ({ label, ...props }) => {
  return (
    <label className="radio_container">
      <input type="radio" {...props} className="radio_input" />
    </label>
  );
};
