import styles from "./Footer.module.scss";
import Paragraph from "components/atoms/Paragraph";
import Button from "components/atoms/Button";
import { GitPullRequest, Linkedin, Link } from "react-feather";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Paragraph upper bold tiny white>
        exo pour kev !!
      </Paragraph>
      <div className={styles.social}>
        <Button label="Github" href="https://github.com/RemyChazelas" external>
          <GitPullRequest size={16} color="white" />
        </Button>
        <Button
          label="linkedin"
          href="https://www.linkedin.com/in/remy-chazelas-4837bb20b/"
          external
        >
          <Linkedin size={16} color="white" />
        </Button>
      </div>
    </div>
  );
}
