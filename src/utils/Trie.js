import TrieNode from "./TrieNode.js";

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let currentNode = this.root;

    for (const letter of word.toLowerCase()) {
      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new TrieNode();
      }

      currentNode = currentNode.children[letter];
    }

    currentNode.isEndOfWord = true;
  }

  search(word) {
    let currentNode = this.root;

    for (const ch of word.toLowerCase()) {
      if (!currentNode.children[ch]) {
        return [];
      }

      currentNode = currentNode.children[ch];
    }

    const wordList = [];
    this.findAllWords(currentNode, word, wordList);
    return wordList;
  }

  findAllWords(node, word, wordList) {
    if (wordList >= 5) return;

    if (node.isEndOfWord) {
      wordList.push(word);
    }

    for (const ch in node.children) {
      if (wordList.length >= 5) return;
      this.findAllWords(node.children[ch], word + ch, wordList);
    }
  }
}

export default Trie;
