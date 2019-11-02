const username = "<img onerror='alert(\"Hacked!\")' src='invalid-image' />";

class UserProfilePage {
    render() {
        return (
            <h1> Hello {username}!</h1>
        );
    }
}
