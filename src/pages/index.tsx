import Header from "../components/Header";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <hr />
      <TodoList />
      <Footer />
    </div>
  );
}
