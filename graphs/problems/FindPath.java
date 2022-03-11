import java.util.*;

public class FindPath {
  public static void main(String[] args) {
    Map<String, String[]> graph = Map.of(
      "f", new String[] {"g", "i"},
      "g", new String[] {"h"},
      "h", new String[] {},
      "i", new String[] {"g", "k"},
      "j", new String[] {"i"},
      "k", new String[] {}
    );

    System.out.println(hasPathDFS(graph, "f", "k"));
  }

  // dfs
  public static boolean hasPathRecursive(Map graph, String src, String dest) {
    if(src == dest) return true;

    for(String neighbor: (String[]) graph.get(src)) {
      if (hasPathRecursive(graph, neighbor, dest)) {
        return true;
      }
    }

    return false;
  }

  // bfs
  public static boolean hasPathIterative(Map graph, String src, String dest) {
    ArrayList<String> queue = new ArrayList<>();
    queue.add(src);

    while(!queue.isEmpty()) {
      String curr = queue.remove(0);

      if (curr == dest) return true;

      for(String neighbor: (String[]) graph.get(curr)){
        queue.add(neighbor);
      }
    }

    return false;
  }

  // dfs iteratively
  public static boolean hasPathDFS(Map graph, String src, String dest) {
    ArrayList<String> stack = new ArrayList<>();
    stack.add(src);

    while(!stack.isEmpty()) {
      String current = stack.remove(stack.size() - 1);

      if (current == dest) return true;

      for(String neighbor: (String[]) graph.get(current)){
        stack.add(neighbor);
      }
    }
    return false;
  }
}
