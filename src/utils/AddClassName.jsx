export function AddClassName(isTyping, userTyping, character, index) {
    if (isTyping) {
        if (userTyping[index] === undefined && index === userTyping.length) {
            return "current";
        }

        if (userTyping[index] === undefined) {
            return "";
        }

        if (userTyping[index] === character.toLowerCase()) {
            return "correct";
        }

        return "wrong";
    }
}