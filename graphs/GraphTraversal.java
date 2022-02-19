import java.util.ArrayList;
import java.util.Map;

public class GraphTraversal {
    public static void main(String[] args) {
        Map<String, String[]> graph = Map.of(
            "a", new String[]{"b", "c"},
            "b", new String[]{"d"},
            "c", new String[]{"e"},
            "d", new String[]{"f"},
            "e", new String[]{""},
            "f", new String[]{}
        );
        dfsRecursive(graph, "a");
    }

    public static void dfsRecursive(Map graph, String source) {
        System.out.println(source);
        String[] current = (String[]) graph.get(source);
        for(String neighbor: current) {
            dfsRecursive(graph, neighbor);
        }
    }

    public static void dfsIteration(Map graph, String source) {
        ArrayList<String> stack = new ArrayList<>();
        stack.add(source);
        while(!stack.isEmpty()) {
            String current = stack.remove(stack.size()-1);
            System.out.println(current);

            for(String neighbor: (String[]) graph.get(current)) {
                stack.add(neighbor);
            }
        }
    }

    public static void bfsIteration(Map graph, String source) {
        ArrayList<String> queue = new ArrayList<>();
        queue.add(source);
        while(!queue.isEmpty()) {
            String current = queue.remove(0);
            System.out.println(current);
            for(String neighbor: (String[]) graph.get(current)) {
                queue.add(neighbor);
            }
        }
    }

}
