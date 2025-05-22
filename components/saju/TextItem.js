export default function TextItem({ text, subText }) {
  return (
    <div className='flex flex-col items-center justify-center py-1'>
      <p className='font-bold text-[clamp(10px,3.5vw,15px)]'>{text}</p>

      {subText && <p className='text-[clamp(8px,3.5vw,10px)]  text-gray-700'>({subText})</p>}
    </div>
  );
}
