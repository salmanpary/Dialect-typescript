import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "./Faqs.module.css";
export default function Faqs() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      open: false,
      question: "Do I need any qualifications to enroll for this course ? ",
      answer:
        "The course is open for anyone without any prior education in computer science. We recommend students who have finished any degree or in the final year of college to sign up for the course.",
    },
    {
      id: 2,
      open: false,
      question: " Will the course be online or offline ?",
      answer: `The course will be entirely online via the Dialect website. Students can access the course via the website and learn at their own pace. 
      `,
    },
    {
      id: 3,
      open: false,
      question: "How can I clear my doubts during the course ?",
      answer: `The students will be having access to senior developers via online video meetings to clear their doubts. Students can book sessions with the developers at any point during the course.`,
    },
    {
      id: 4,
      open: false,
      question: "Is there any financial support offered ?",
      answer: `Students who perform high in the eligibility tests are qualified for financial assistance from Dialect. `,
    },
  ]);

  function handleClick(id: number) {
    let temp = faqs.map((item) => {
      if (item.id === id) return { ...item, open: !item.open };
      return { ...item, open: false };
    });
    setFaqs(temp);
  }

  return (
    <>
      {
        <div id="faqs">
          <section className={`${styles["faqs"]}`}>
            <div className={styles["content"]}>
              {faqs.map((item) => (
                <Faq
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                  open={item.open}
                  onClick={() => handleClick(item.id)}
                />
              ))}
            </div>
          </section>
        </div>
      }
    </>
  );
}
export function FaqPageQuestions() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      open: false,
      question: "Is there any test to attend the course? ",
      answer:
        "Yes, all students must pass our eligibility test which checks their aptitude and analytical skills. We believe this test is a good indicator of the capacity and potential of the student to be successful in software development.",
    },
    {
      id: 2,
      open: false,
      question: "What is the payment method for the course? ",
      answer: `The payment can be made online with UPI, Net Banking, Debit Card, Credit Card or popular wallets. Once the payment is made, students will have lifetime access to the course content via the Dialect website. 
      `,
    },
    {
      id: 3,
      open: false,
      question: "How can I access the course content? ",
      answer: `The course can be accessed via the Dialect website and students can learn at their own pace. `,
    },
    {
      id: 4,
      open: false,
      question: "How can I clear doubts in the course? ",
      answer: `Students have the option to schedule 1-1 sessions with senior developers to clear queries and doubts. The sessions will be online via Google Meet or Zoom.`,
    },
    {
      id: 5,
      open: false,
      question:
        "Can I attend the course if I do not have a laptop or a Personal Computer?",
      answer:
        "We require students to have a laptop or Personal Computer to attend the course. In case the student does not have a system, Dialect will assist you to arrange it.",
    },
    {
      id: 6,
      open: false,
      question: "Where can I get a job once the course is done?",
      answer:
        "Once the course is completed, we will help you to create your resume and to apply for jobs in startups and software development companies.",
    },
    {
      id: 7,
      open: false,
      question: "Is there any offline training provided?",
      answer:
        "The course is completely online and can be accessed via any system through the Dialect website.",
    },
    {
      id: 8,
      open: false,
      question: "What is the average salary of Junior Developers?",
      answer:
        "The average salary of junior developers can range from ₹2.5 to 4 Lakhs Per Annum depending on the organization.",
    },
    {
      id: 9,
      open: false,
      question:
        "What will be the duration I have to commit on a daily basis during the course?",
      answer:
        "We recommend spending approximately 3-4 hours per day to complete the course. The course can be learned while the student is in college or after graduation. ",
    },
    {
      id: 10,
      open: false,
      question:
        "Is it possible to learn two programming languages in parallel?",
      answer:
        "Yes, it is possible but we recommend learning and mastering one language before learning the second language. ",
    },
  ]);

  function handleClick(id: number) {
    let temp = faqs.map((item) => {
      if (item.id === id) return { ...item, open: !item.open };
      return { ...item, open: false };
    });
    setFaqs(temp);
  }

  return (
    <>
      {
        <div id="faqs">
          <section className={`${styles["faqs"]}`}>
            <div className={styles["content"]}>
              {faqs.map((item) => (
                <Faq
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                  open={item.open}
                  onClick={() => handleClick(item.id)}
                />
              ))}
            </div>
          </section>
        </div>
      }
    </>
  );
}

const faqAnimation = {
  initial: {
    height: 0,
  },
  animate: {
    height: "auto",
  },
  exit: {
    height: 0,
  },
};
interface FaqProps {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
}
function Faq({ question, answer, open, onClick }: FaqProps) {
  return (
    <div className={`${styles["faq"]} ${open ? styles["open"] : ""}`}>
      <div>
        <div className={styles["question"]}>{question}</div>
        <AnimatePresence>
          {open && (
            <motion.p
              variants={faqAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              className={styles["answer"]}
            >
              {answer}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className={styles["arrow-wrapper"]} onClick={onClick}>
        <svg
          width="18"
          height="11"
          viewBox="0 0 18 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1.5L9 9.5L17 1.5" stroke="black" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}
