# v-qrcode

A Vue QRCode Component.

## Install

    npm i v-qrcode --save

## Usage

    <template>
        <div>
            <qrcode :cls="qrCls" :value="qrText"></qrcode>
        </div>
    </template>

    <script>
    import Qrcode from 'v-qrcode/src/index'

    export default {
        data () {
            return {
                qrCls: 'qrcode',
                qrText: 'hello world'
            }
        },
        components: {
            Qrcode
        }
    }
    </script>

## Options

- `value`: the string to generate QR Code

- `cls`: the classname of wrapper, `''` by default

- `size`:  qrcode's size, `100*100` by default

- `level`: qrcode's level, `L` by default, value can be one of `L, Q, M, H`,

- `background`: the background color, `#fff` by default

- `foreground`: the foreground color, `#000` by default

- `mime`: the mime type of image, `image/png` by default

- `padding`: the padding between qrcode and wrapper, `0` by default

- `type`: the output type can be either `canvas` or `image`

## demo

[demo](https://atwxp.github.io/v-qrcode/)
