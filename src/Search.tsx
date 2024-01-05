import { ChangeEvent, FormEvent, useState } from "react";

export default function Search() {
  const [keyword, setKeyword] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!keyword) {
        return;
    }

    const params = new URLSearchParams();
    params.set('k', keyword);
    params.set('rh', `p_6:ATVPDKIKX0DER`);

    const url = `https://www.amazon.com/s?${params.toString()}`;

    window.open(url);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={keyword} onChange={handleChange} placeholder="Search Amazon" />
    </form>
  );
}
