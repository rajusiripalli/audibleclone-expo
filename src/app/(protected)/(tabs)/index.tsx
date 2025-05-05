import { FlatList } from "react-native";
import books from "@/dummyBooks";
import BookListItem from "@/components/BookListItem";

export default function App() {
  return (
    <FlatList
      data={books}
      renderItem={({ item }) => <BookListItem book={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 16 }}
    />
  );
}
