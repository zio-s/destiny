import CheonganItem from './CheonganItem';

export default function JijiItem({ koreanText, chineseChar, type, color, subText1, subText2 }) {
  return (
    <CheonganItem
      koreanText={koreanText}
      chineseChar={chineseChar}
      type={type}
      color={color}
      subText1={subText1}
      subText2={subText2}
    />
  );
}
