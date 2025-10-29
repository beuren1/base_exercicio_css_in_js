import styled from 'styled-components';

export const Search = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  width: 100%;
`;

export const Input = styled.input.attrs({ type: 'text' })`
  padding: 14px 16px;
  border: 1px solid rgba(255,255,255,0.08);
  background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
  color: var(--text);
  border-radius: 12px;
  font-size: 15px;
  outline: none;
  box-shadow: 0 1px 0 0 rgba(255,255,255,0.03) inset;

  &::placeholder { color: var(--muted); }
  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 4px var(--ring);
  }
`;

export const Button = styled.button`
  padding: 14px 18px;
  border: 0;
  border-radius: 12px;
  background: linear-gradient(180deg, var(--primary), var(--primary-700));
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  letter-spacing: 0.3px;
  box-shadow: 0 10px 20px -10px var(--primary);
  transition: transform .15s ease, box-shadow .15s ease, opacity .15s ease;

  &:hover { transform: translateY(-1px); box-shadow: 0 14px 28px -12px var(--primary); }
  &:active { transform: translateY(0); opacity: .95; }
`;