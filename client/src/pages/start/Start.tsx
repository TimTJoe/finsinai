import { Button, Image, Text, mergeClasses } from "@fluentui/react-components";
import { StartStyles } from "./start.styles";
import fgImg from "@assets/start_foreground.jpg";

function Start() {
  let styles = StartStyles();
  return (
    <div className={styles.wrapper}>
      <section className={styles.content}>
        <div className={styles.copy}>
          <Text as="h1" size={900} weight="bold">
            Smart solutions for everyday budget management.
          </Text>
          <br />
          <br />
          <Text as="p" size={500}>
            Easily manage your finances with tools for budgeting, invoicing,
            reporting, requisition approvals, and team messaging.
          </Text>
          <br />
          <br />
          <section className={styles.btnGroup}>
            <Button as="a" href="/signup" className={styles.primary} appearance="primary" size="large">
              Create Free Account
            </Button>
            <Button as="a" href="/signin" className={styles.secondary} appearance="secondary" size="large">
              Sign in
            </Button>
          </section>
        </div>
        <div className={styles.figure}>
          <Image alt="Foreground Image" src={fgImg} />
        </div>
      </section>
    </div>
  );
}

export default Start;
