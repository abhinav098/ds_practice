import java.util.Hashtable;
import java.util.HashSet;
import java.util.ArrayList;

class QueueObj {
    int distance;
    String node;

    public QueueObj(String node, int distance) {
        this.distance = distance;
        this.node = node;
    }

    public String getNode() {
        return this.node;
    }

    public int getDistance() {
        return this.distance;
    }
}

public class ShortestPath {
    public static void main (String[] args) {
        Hashtable<String, String[]> graph = new Hashtable<>();
        graph.put("x", new String[] {"y", "w"});
        graph.put("y", new String[] {"z", "x"});
        graph.put("w", new String[] {"x", "v"});
        graph.put("v", new String[] {"w", "z"});
        graph.put("z", new String[] {"v", "y"});

        System.out.println(findShorestPath(graph, "w", "z"));
    }

    public static int findShorestPath(Hashtable graph, String src, String dest) {
        ArrayList<QueueObj> queue = new ArrayList<>();
        HashSet<QueueObj> visited = new HashSet<>();
        QueueObj firstNode = new QueueObj(src, 0);
        queue.add(firstNode);
        visited.add(firstNode);

        while(!queue.isEmpty()) {
            QueueObj currentNode = queue.remove(0);
            QueueObj nextNode = null;
            if(dest == currentNode.getNode()) return currentNode.getDistance();
            for(String neighbor: (String[]) graph.get(currentNode.getNode())) {
                nextNode = new QueueObj(neighbor, currentNode.getDistance() + 1);
                if (!visited.contains(nextNode)) {
                    queue.add(nextNode);
                    visited.add(nextNode);
                }
            }
        }
        return -1;
    }
}
