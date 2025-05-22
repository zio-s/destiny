import React from 'react';
import TextItem from './TextItem';
import CheonganItem from './CheonganItem';
import JijiItem from './JijiItem';

const SajuTable = ({ personName, birthDateTime, sajuData }) => {
  return (
    <section
      className='w-full px-2 py-10 relative bg-no-repeat bg-top bg-cover -mt-5'
      style={{ backgroundImage: "url('/image/section-04-bg.svg')" }}
    >
      <div className='px-4'>
        <div className='flex items-center justify-center gap-2 relative pb-6'>
          <div className='text-center break-keep text-title-saju'>
            <h2 className='text-xl font-bold '>{personName}님의 사주</h2>
            <p className='text-2xl  font-bold mt-2'>{birthDateTime}</p>
          </div>
        </div>

        {/* 테이블 헤더 */}
        <div className='grid grid-cols-[1.1fr_1.5fr_1.5fr_1.5fr_1.5fr] border-b-1 border-b-black-g'>
          <div />
          {['時', '日', '月', '年'].map((title, idx) => (
            <div
              key={idx}
              className='border-light-g -ml-px p-2 text-center border-l first:border-l-black last:border-r last:border-r-black'
            >
              <span className='text-2xl font-bold'>{title}</span>
            </div>
          ))}
        </div>

        {/* 테이블 행*/}
        {[
          { title: '十星', sub: '십성', data: sajuData.tenStars1, component: TextItem, isLightBorder: false },
          { title: '天干', sub: '천간', data: sajuData.cheongan, component: CheonganItem, isLightBorder: true },
          { title: '地支', sub: '지지', data: sajuData.jiji, component: JijiItem, isLightBorder: false },
          { title: '十星', sub: '십성', data: sajuData.tenStars2, component: TextItem, isLightBorder: false },
          { title: '十二運星', sub: '십이운성', data: sajuData.twelveStars, component: TextItem, isLightBorder: false },
          { title: '十二神殺', sub: '십이신살', data: sajuData.twelveGods, component: TextItem, isLightBorder: false },
        ].map((row, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-[1.1fr_1.5fr_1.5fr_1.5fr_1.5fr] border-b ${
              row.isLightBorder ? 'border-light-g' : 'border-black'
            }`}
          >
            <div className={`flex flex-col items-center justify-center border-r border-black`}>
              <span className='text-[clamp(10px,3.5vw,16px)] font-bold '>{row.title}</span>
              <span className='text-[clamp(8px,3.5vw,10px)] '>({row.sub})</span>
            </div>
            {row.data.map((item, i) => (
              <div key={i} className={`border-r bg-white p-2 flex flex-col items-center justify-center border-black`}>
                <row.component {...item} />
              </div>
            ))}
          </div>
        ))}

        {/* 귀인 행 */}
        <div className='grid grid-cols-[1.1fr_1.5fr_1.5fr_1.5fr_1.5fr]'>
          <div className='flex flex-col items-center justify-center border-b-1 border-black '>
            <span className='text-[clamp(10px,3.5vw,16px)] font-bold'>貴人</span>
            <span className='text-[clamp(8px,3.5vw,10px)]'>(귀인)</span>
          </div>
          {sajuData.nobles.map((items, i) => (
            <div
              key={i}
              className='border-l-1 border-r-1 border-b-1 border-black ml-[-1px] bg-white flex flex-col items-center justify-center'
            >
              {items.length === 0 ? (
                <span className='text-[clamp(10px,3.5vw,10px)] text-gray-800'>(없음)</span>
              ) : (
                items.map((nobleItem, j) => <TextItem key={j} {...nobleItem} />)
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SajuTable;
