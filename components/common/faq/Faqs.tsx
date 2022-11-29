import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "./Faqs.module.css";
interface faqInfo {
  question: string;
  answer: string;
}
interface FaqsProps {
  faqinfo: faqInfo[];
}

export default function Faqs({ faqinfo }: FaqsProps) {

  //add two field id and open to faqinfo
  const [faqs, setFaqs] = useState(
    faqinfo?.map((faq, index) => {
      return {
        ...faq,
        id: index,
        open: false,
      };
    })
  );

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
export function FaqPageQuestions({ faqinfo }: FaqsProps) {
  //add two field id and open to faqinfo
  const [faqs, setFaqs] = useState(
    faqinfo?.map((faq, index) => {
      return {
        ...faq,
        id: index,
        open: false,
      };
    })
  );

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
