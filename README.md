# binary-converter
Reading the book "Code" by Charles Petzold - which btw is a good read! - inspired me to write this script: it converts a decimal numer into a binary one and vice versa. 
In the conversion of the binary number, the counter value of the iteration is used both for indexing through the binary number, as well as calculating the power of 2 we are dealing with at each position of the number. Since the number in the leftmost position holds the lowest index number, but the highest power of two, I reverse the binary number before iterating.
