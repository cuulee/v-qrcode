<template>
    <div v-bind:class="cls"></div>
</template>

<script>
import QRious from 'qrious'

export default {
    props: {
        value: String,

        cls: {
            type: String,
            default: ''
        },

        elem: {
            type: String,

            default: null,

            validator (value) {
                let node = document.querySelector(value)

                let nodeName = node && node.nodeName && node.nodeName.toLowerCase()

                return ['img', 'canvas', null].indexOf(nodeName) > -1
            }
        },

        size: {
            type: [Number, String],
            default: 100
        },

        level: {
            type: String,
            default: 'L'
        },

        background: {
            type: String,
            default: '#fff'
        },

        foreground: {
            type: String,
            default: '#000'
        },

        mime: {
            type: String,
            default: 'image/png'
        },

        padding: {
            type: [Number, String],
            default: 0
        },

        type: {
            type: String,
            default: 'canvas'
        }
    },

    methods: {
        render () {
            const qr = new QRious({
                element: document.querySelector(this.elem),
                background: this.background,
                foreground: this.foreground,
                level: this.level,
                mime: this.mime,
                padding: this.padding,
                size: this.size,
                value: this.value
            });

            this.$el.innerHTML = ''

            this.$el.appendChild(qr[this.type])
        }
    },

    mounted () {
        this.render()

        this.$watch(function () {
            return this.value + this.size + this.level + this.background + this.foreground + this.mime + this.padding + this.type
        }, this.render)
    }
}

</script>
