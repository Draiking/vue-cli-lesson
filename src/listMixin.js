export default {
    data() {
        return {
            searchName: '',
            names: ["vlad", "max", "elena", "igor"],
        };
    },
    computed: {
        filteredNames() {
            return this.names.filter((name) => {
                return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1;
            });
        },
    },
}