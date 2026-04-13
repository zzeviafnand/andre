import { ref, computed } from 'vue'
import roomImage from '../assets/room.jpg'
import roomBathroomImage from '../assets/roombathroom.jpg'

export default {
  setup() {
    const selectedRoom = ref(null)
    const showPopup = ref(false)
    const rooms = ref([
      { id: 1, name: 'Kamar standard', price: 'Rp 450.000', capacity: 1, image: roomImage },
      { id: 2, name: 'Kamar + Kamar mandi', price: 'Rp 600.000', capacity: 1, image: roomBathroomImage },
      { id: 3, name: 'Kamar Kompak', price: 'Rp 350.000', capacity: 1, image: roomImage }
    ])

    const bookingForm = ref({
      name: '',
      phone: '',
      roomId: '',
      checkIn: '',
      checkOut: ''
    })

    // Detect if device is mobile
    const isMobile = computed(() => {
      if (typeof window !== 'undefined') {
        return window.innerWidth <= 768
      }
      return false
    })

    const submitBooking = () => {
      if (!bookingForm.value.name || !bookingForm.value.phone || !bookingForm.value.roomId || !bookingForm.value.checkIn) {
        alert('Mohon isi semua data terlebih dahulu')
        return
      }
      console.log('Booking submitted:', bookingForm.value)
      alert('Terima kasih telah memesan! Kami akan menghubungi Anda segera.')
      // Reset form
      bookingForm.value = {
        name: '',
        phone: '',
        roomId: '',
        checkIn: '',
        checkOut: ''
      }
      selectedRoom.value = null
    }

    return {
      selectedRoom,
      showPopup,
      rooms,
      bookingForm,
      submitBooking,
      isMobile
    }
  }
}
