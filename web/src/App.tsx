import { Layout } from "~/components/layout";
import { Sidebar } from "~/components/sidebar";

function App() {
  return (
    <>
      <Layout>
        <Sidebar />
        <p>Main</p>
      </Layout>
    </>
  );
}

export default App;
