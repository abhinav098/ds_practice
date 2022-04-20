import java.util.Hashtable;
import java.util.HashSet;
public class LargestComponent {
  public static void main (String[] args) {
    int largest = 0;
    Hashtable<String, String[]> graph = new Hashtable<>();
    graph.put("0", new String[] {"8", "1", "5"});
    graph.put("1", new String[] {"0"});
    graph.put("5", new String[] {"0", "8"});
    graph.put("8", new String[] {"0", "5"});
    graph.put("2", new String[] {"3", "4"});
    graph.put("3", new String[] {"2", "4"});
    graph.put("4", new String[] {"3", "2"});

    HashSet<String> visited = new HashSet<>();
    int size = 0;
    for(String currentNode: graph.keySet()) {
      size = explore(graph, currentNode, visited);
      largest = Math.max(largest, size);
    }
    System.out.println(largest);
  }

  public static int explore(Hashtable graph, String current, HashSet visited) {

    if(visited.contains(current)) return 0;
    visited.add(current);

    int numberOfNodes = 1; // current node where I'm at.

    for(String neighbor: (String[]) graph.get(current)) {
      // add node at each next node,
      // this will add up 1 or 0 at each recursive call
      numberOfNodes += explore(graph, neighbor, visited);;
    }

    return numberOfNodes;
  }
}
