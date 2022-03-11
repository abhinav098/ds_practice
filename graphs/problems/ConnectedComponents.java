import java.util.Hashtable;
import java.util.HashSet;
public class ConnectedComponents {
  public static void main (String[] args) {
      Hashtable<String, String[]> graph = new Hashtable<>();
      graph.put("f", new String[] {"g", "i", "j"});
      graph.put("g", new String[] {"h"});
      graph.put("h", new String[] {"i"});
      graph.put("i", new String[] {"g", "h", "f"});
      graph.put("j", new String[] {});
      graph.put("k", new String[] {});

      HashSet<String> visited = new HashSet<>();
      int count = 0;
      for(String currentNode: graph.keySet()) {
          if (explore(graph, currentNode, visited) == true) count += 1;
      }
      System.out.println(count);
  }

  public static boolean explore(Hashtable graph, String current, HashSet visited) {
      if(visited.contains(current)) return false;
      visited.add(current);

      for(String neighbor: (String[]) graph.get(current)) {
          explore(graph, neighbor, visited);
      }

      return true;
  }
}

