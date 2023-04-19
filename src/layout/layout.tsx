import styles from './layout.module.css';
import { LayoutProps } from '@/layout/layout.props';
import { Header } from '@/layout/header/header';
import { Sidebar } from '@/layout/sidebar/sidebar';
import { Footer } from '@/layout/footer/footer';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: React.FC<T>) => {
  return function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
