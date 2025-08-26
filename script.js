function suggestDS() {
      let size = document.getElementById("size").value;
      let access = document.getElementById("access").value;
      let insert = document.getElementById("insert").value;
      let order = document.getElementById("order").value;
      let priority = document.getElementById("priority").value;
      let relationship = document.getElementById("relationship").value;

      let suggestion = "";
      let explanation = "";

      if (relationship === "yes") {
        suggestion = "Graph (Adjacency List/Matrix)";
        explanation = "You mentioned elements have relationships, so Graphs are the natural choice for modeling connections like networks, maps, or social links.";
      }
      else if (priority === "yes") {
        suggestion = "Heap / Priority Queue";
        explanation = "Since prioritization is required, a Heap/Priority Queue ensures efficient retrieval of the highest (or lowest) priority element.";
      }
      else if (order === "yes") {
        suggestion = "Balanced Tree (BST / AVL / Red-Black Tree)";
        explanation = "You need order to be maintained. Balanced Trees guarantee sorted data with O(log n) insertions, deletions, and lookups.";
      }
      else if (size === "fixed" && access === "fast") {
        suggestion = "Array";
        explanation = "A fixed-size dataset with fast random access maps perfectly to Arrays, since they allow O(1) indexing with minimal memory overhead.";
      }
      else if (size === "dynamic" && insert === "frequent") {
        suggestion = "Linked List";
        explanation = "You require frequent insertions/deletions and dynamic size. Linked Lists handle these efficiently by adjusting pointers instead of shifting elements.";
      }
      else if (insert === "rare" && access === "fast") {
        suggestion = "Dynamic Array (ArrayList / Vector)";
        explanation = "Rare insertions with a need for fast access align with Dynamic Arrays, which allow resizing but still provide O(1) indexing.";
      }
      else {
        suggestion = "Hash Table or Queue/Stack (depending on access pattern)";
        explanation = "Since no strong ordering or relationships were specified, a Hash Table works best for fast key-value lookups, or Queue/Stack for sequential/LIFO needs.";
      }

      document.getElementById("result").innerText = "✅ Suggested Data Structure: " + suggestion;
      document.getElementById("explanation").innerText = explanation;
    }
