import SajuTable from './saju/SajuTable';

export const SajuTableSection = () => {
  const exampleData = {
    personName: '김로켓',
    birthDateTime: '1980년 8월27일 08:10',

    sajuData: {
      tenStars1: [
        { text: '傷官', subText: '상관' },
        { text: '比肩', subText: '비견' },
        { text: '傷官', subText: '상관' },
        { text: '傷官', subText: '상관' },
      ],

      cheongan: [
        { koreanText: '임', chineseChar: '壬', type: '양', color: 'black', subText1: '陽', subText2: '水' },
        { koreanText: '정', chineseChar: '丁', type: '음', color: 'red', subText1: '陰', subText2: '火' },
        { koreanText: '계', chineseChar: '癸', type: '음', color: 'black', subText1: '陰', subText2: '水' },
        { koreanText: '계', chineseChar: '癸', type: '음', color: 'black', subText1: '陰', subText2: '水' },
      ],

      jiji: [
        { koreanText: '인', chineseChar: '寅', type: '양', color: 'teal', subText1: '陽', subText2: '木' },
        { koreanText: '사', chineseChar: '巳', type: '음', color: 'red', subText1: '陰', subText2: '火' },
        { koreanText: '해', chineseChar: '亥', type: '음', color: 'black', subText1: '陰', subText2: '水' },
        { koreanText: '유', chineseChar: '酉', type: '음', color: 'white', subText1: '陰', subText2: '金' },
      ],

      tenStars2: [
        { text: '比肩', subText: '비견' },
        { text: '劫財', subText: '겁재' },
        { text: '食神', subText: '식신' },
        { text: '偏財', subText: '편재' },
      ],

      twelveStars: [
        { text: '死', subText: '사' },
        { text: '帝旺', subText: '제왕' },
        { text: '胎', subText: '태' },
        { text: '長生', subText: '장생' },
      ],

      twelveGods: [
        { text: '劫殺', subText: '겁살' },
        { text: '地殺', subText: '지살' },
        { text: '驛馬殺', subText: '역마살' },
        { text: '將星殺', subText: '장성살' },
      ],

      nobles: [
        [],
        [],
        [{ text: '天乙', subText: '천을귀인' }],
        [
          { text: '天乙', subText: '천을귀인' },
          { text: '太極', subText: '태극귀인' },
          { text: '文昌', subText: '문창귀인' },
        ],
      ],
    },
  };

  return <SajuTable {...exampleData} />;
};
