import Head from 'next/head';
import Section from '@/components/Section';
import { SajuTableSection } from '@/components/SajuTableSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>사주팔자 코딩테스트 페이지</title>
      </Head>
      <main className='max-w-md mx-auto bg-[#f1ede3] min-h-screen flex flex-col pb-2'>
        <Section
          image='/image/section-01-bg.svg'
          text={`이제 본격적으로\noo님의 사주팔자를\n분석해볼 차례네요.`}
          variant='variant1'
        />
        <Section image='/image/section-02.svg' mt={true} />
        <Section
          image='/image/section-03.svg'
          text={`제가 oo님의 사주를\n보기 쉽게 표로 정리했어요`}
          variant='variant2'
        />
        <SajuTableSection />
      </main>
    </>
  );
}
