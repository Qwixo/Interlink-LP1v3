import React from 'react';
import { Timeline } from './ui/timeline';

const TimelineSection = () => {
  const timelineData = [
    {
      title: "Step 1",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <span className="font-bold text-[#064088] text-base">Find the Right Program</span> - Look for English programs with these benefits:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ <span className="font-semibold">No TOEFL Required</span> - Enter university without standardized tests
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ <span className="font-semibold">Small Classes & Personalized Support</span> - Get the attention you deserve
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ <span className="font-semibold">University Preparation & Pathway</span> - Learn skills for academic success
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ <span className="font-semibold">Cultural & Academic Support</span> - Adjust easily to life in America
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 2",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <span className="font-bold text-[#064088] text-base">Plan Your Budget</span> - Here's what you need to think about:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              💰 Tuition: Usually between $1,500 to $2,500 per 5-week term
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              📝 Visa fees: Approximately $350
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🏠 Housing & food: Typically $600–$1,200/month
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              📚 Books and supplies
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🎭 Personal expenses (phone, entertainment)
            </div>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm italic">
            Usually, improving English enough for university takes about one year if you start from a basic level.
          </p>
        </div>
      ),
    },
    {
      title: "Step 3",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <span className="font-bold text-[#064088] text-base">Apply to Your School</span> - Applying isn't complicated. You'll just need:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              📝 A school application (usually online)
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🪪 A copy of your passport
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🎓 Proof of your school grades
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              💼 Proof of finances (bank statement or sponsor letter)
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 4",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <span className="font-bold text-[#064088] text-base">Get Your Visa</span> - Don't worry; it's easier than it sounds!
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              📄 Show proof you can afford your studies (I-20 form from your school)
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              💻 Complete the I-901 form online and pay the SEVIS fee
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🗣️ Schedule and attend a simple interview at your local U.S. consulate
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 5",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <span className="font-bold text-[#064088] text-base">Get Ready for Your Adventure!</span>
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✈️ Buy your flight ticket
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🏠 Arrange housing before you arrive (your school can help!)
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🎉 Join the orientation, make new friends, and start enjoying your new life in the U.S.!
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#064088] mb-4">
            Your Journey to Studying in the USA
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Follow these 5 simple steps to make your dream of studying in America a reality.
          </p>
        </div>
        
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default TimelineSection;
