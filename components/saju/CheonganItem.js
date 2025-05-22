export default function CheonganItem({ koreanText, chineseChar, color, subText1, subText2 }) {
  const bgColors = {
    black: 'bg-[#2F2F2F]', // 흑색
    red: 'bg-[#C23030]', // 적색
    teal: 'bg-[#18868C]', // 청록색
    white: 'bg-white border-2 border-[#1B2F49]',
  };

  const textColors = {
    black: 'text-white',
    red: 'text-white',
    teal: 'text-white',
    white: 'text-gray-900',
  };

  return (
    <div
      className={`${bgColors[color]} ${textColors[color]} w-full h-full py-1 rounded-xl flex flex-col items-center justify-center gap-0.5`}
    >
      <span className='text-[8px]'>{koreanText}</span>
      <span className='text-2xl font-bold leading-none '>{chineseChar}</span>
      <span className='text-[8px] '>
        {subText1}
        {subText2}
      </span>
    </div>
  );
}
