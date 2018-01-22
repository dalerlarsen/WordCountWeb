import org.w3c.dom.HTMLInputElement
import kotlin.browser.document

fun main(args: Array<String>) {
    println("Hello World")

    val button = document.getElementById("buttonId")!!
    button.addEventListener("click", {
        val theText = (document.getElementById("wordTextId")!! as HTMLInputElement).value

        // Make a list of all the words separated out
        val words = theText
                .replace("\n", " ")
                .replace(",", "")
                .replace(".", "")
                .replace("!", "")
                .replace("?", "")
                .split(" ")

        // Get a counted list of all words
        val wordMap = mutableMapOf<String, Int>()

        for (word in words) {
            val capitalize = word.capitalize()
            if (wordMap[capitalize] == null) {
                wordMap[capitalize] = 1
            } else {
                var count = wordMap[capitalize]!!
                wordMap[capitalize] = count + 1
            }
        }

        // Sort the list
        val wordList = wordMap.toList()
        val sortedList = wordList.sortedWith(compareByDescending({it.second}))

        // Print a sorted list of the most popular words
        var listItems = ""
        for (word in sortedList) {
            listItems += "<li> ${word.first} - ${word.second}</li>"
        }
        document.getElementById("theList")!!.innerHTML = listItems


    })


}