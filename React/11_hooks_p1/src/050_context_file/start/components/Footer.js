import { useUpdateTheme } from "../context/ThemeContext";

const Footer = () => {
  const setTheme = useUpdateTheme()
  console.log('footer')
  return (
    <div>
      <h1>footer</h1>
    </div>
  );
};

export default Footer;
