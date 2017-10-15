
export default {
    props: {
        level: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            default: 1
        }
    },
    render: function (createElement) {
        return createElement(
            'h' + this.level,
            [
                createElement(
                    'a',
                    {
                        domProps: {
                            href: '#' + this.title,
                           
                        },
                        class:'woshi'
                    },
                    this.$slots.default
                )
            ]
        )
    }
}
