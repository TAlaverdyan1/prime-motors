import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (e:any) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <select onChange={changeLanguage} value={router.locale}>
      <option value="en">En</option>
      <option value="ru">Ru</option>
      <option value="am">Am</option>
    </select>
  );
};

export default LanguageSwitcher;
