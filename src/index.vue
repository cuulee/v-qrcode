<template>
<div class="app">
    <div class="form-group">
        <label for="qrText">Value: </label>
        <input type="text" id="qrText" name="qrText" v-model="qrText">
    </div>

    <div class="form-group">
        <label for="qrSize">Size: </label>
        0 <input type="range" id="qrSize" name="qrSize" max="1000" v-model="qrSize"> 1000
    </div>

    <div class="form-group">
        <label for="qrLevel">Level: </label>
        <select name="qrLevel" id="qrLevel" v-model="qrLevel">
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="Q">Q</option>
            <option value="H">H</option>
        </select>
    </div>

    <div class="form-group">
        <label for="qrBg">Background: </label>
        <input type="color" id="qrBg" name="qrBg" v-model="qrBg">
    </div>

    <div class="form-group">
        <label for="qrFg">Foreground: </label>
        <input type="color" id="qrFg" name="qrFg" v-model="qrFg">
    </div>

    <div class="form-group">
        <label for="qrPadding">Padding: </label>
        <input type="text" id="qrPadding" name="qrPadding" v-model="qrPadding">
    </div>

    <div class="form-group">
        <label for="qrMime">MIME: </label>
        <select name="qrMime" id="qrMime" v-model="qrMime">
            <option value="image/png">image/png</option>
            <option value="image/jpeg">image/jpeg</option>
        </select>
    </div>

    <div class="form-group">
        <label for="qrType">Type: </label>
        <select name="qrType" id="qrType" v-model="qrType">
            <option value="canvas">canvas</option>
            <option value="image">image</option>
        </select>
    </div>

    <qrcode :value="qrText" :size="qrSize" :level="qrLevel" :background="qrBg" :foreground="qrFg" :padding="qrPadding" :type="qrType" :mime="qrMime"></qrcode>
</div>

</template>

<script>
import Qrcode from 'v-qrcode/src/index'

export default {
    data () {
        return {
            qrText: 'hello world',
            qrSize: 100,
            qrLevel: 'L',
            qrBg: '#ffffff',
            qrFg: '#000000',
            qrPadding: 0,
            qrMime: 'image/png',
            qrType: 'canvas'
        }
    },

    components: {
        Qrcode
    }
}
</script>
