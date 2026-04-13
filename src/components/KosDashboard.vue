<script>
import KosDashboard from './KosDashboard.js'
import './KosDashboard.css'

export default KosDashboard
</script>

<template>
  <div class="dorm-container">
    <!-- Header -->
    <section class="dorm-header">
      <button class="admin-btn" title="Panel Admin">👤</button>
      <h1>🏢 Kos Cowo</h1>
      <p>Dengan Keamanan 24 Jam</p>
      <p>WhatsApp: +62 812 3456 7890</p>
      <p>Jl. Pemasyarakatan no.1 Pekanbaru, Riau</p>
    </section>

    <!-- Rooms -->
    <section class="rooms">
      <h2>Pilihan Kamar</h2>
      <div class="rooms-list">
        <div 
          v-for="room in rooms" 
          :key="room.id"
          class="room-card"
          @click="selectedRoom = room; showPopup = true"
          :class="{ active: selectedRoom?.id === room.id }"
        >
          <div class="room-image">
            <img :src="room.image" :alt="room.name" />
            <div class="room-info">
              <ul class="info-list">
                <li><strong>📍 Nama:</strong> {{ room.name }}</li>
                <li><strong>💰 Harga:</strong> {{ room.price }}/bulan</li>
                <li><strong>👥 Kapasitas:</strong> {{ room.capacity }} orang</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Booking Form -->
    <section class="booking-form">
      <h2>Pesan Sekarang</h2>
      <div class="form-group">
        <input v-model="bookingForm.name" type="text" placeholder="Nama Lengkap" />
      </div>
      <div class="form-group">
        <input v-model="bookingForm.phone" type="tel" placeholder="Nomor Telepon" />
        <select v-model="bookingForm.roomId">
          <option value="">-- Pilih Kamar --</option>
          <option v-for="room in rooms" :key="room.id" :value="room.id">
            {{ room.name }}
          </option>
        </select>
      </div>
      <h3>Waktu Booking</h3>
      <div class="form-group">
        <input v-model="bookingForm.checkIn" type="date" />
      </div>
      <button class="submit-btn" @click="submitBooking">Kirim Pemesanan</button>
    </section>

    <!-- Image Popup -->
    <div v-if="showPopup && selectedRoom" class="popup-overlay" @click="showPopup = false">
      <div class="popup-content" @click.stop>
        <button class="close-btn" @click="showPopup = false">×</button>
        <img :src="selectedRoom.image" :alt="selectedRoom.name" class="popup-image" />
        <p class="popup-title">{{ selectedRoom.name }}</p>
      </div>
    </div>
  </div>
</template>
