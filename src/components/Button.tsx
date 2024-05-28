import "./css/Button.css";

export interface Props {
  href?: string;
  name?: string;
}

const Button = (href, name) => {
  return (
    <button class="button" role="button">
      <a href={href}>{name}</a>
    </button>
  );
};

export default Button;
