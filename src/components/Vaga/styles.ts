import styled from 'styled-components';

export const Card = styled.article`
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  padding: 18px;
  display: grid;
  gap: 10px;
  background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
  box-shadow: 0 12px 30px -20px var(--shadow);
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
  will-change: transform;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(99, 102, 241, 0.35);
    box-shadow: 0 16px 36px -18px rgba(99, 102, 241, 0.35);
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  letter-spacing: -0.01em;
`;

export const Meta = styled.div`
  font-size: 14px;
  color: var(--muted);
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  margin: 6px 0 0;
  list-style: none;

  li {
    background: var(--chip);
    border: 1px solid var(--chip-border);
    border-radius: 999px;
    padding: 6px 10px;
    font-size: 12px;
    color: var(--text);
  }
`;