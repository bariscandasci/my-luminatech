"use client"; // Next.js kullanıyorsanız bu satır şart, React ise silebilirsiniz.

import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';

export default function EnergyTester() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [energyScore, setEnergyScore] = useState(0);
  const [message, setMessage] = useState("Modeller Yükleniyor...");
  const [showDiscount, setShowDiscount] = useState(false);

  // 1. Yapay Zeka Modellerini Yükle
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = './models'; // Public klasöründeki yeri
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
      ]);
      setIsModelLoaded(true);
      setMessage("Kamerayı Aç ve Gülümse!");
    };
    loadModels();
  }, []);

  // 2. Kamerayı Başlat
  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Kamera hatası:", err);
        setMessage("Kamera açılamadı, lütfen izin verin.");
      });
  };

  // 3. Yüzü ve Mimikleri Analiz Et
  const handleVideoPlay = () => {
    setInterval(async () => {
      if (videoRef.current && isModelLoaded) {
        const detections = await faceapi.detectSingleFace(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        ).withFaceExpressions();

        if (detections) {
          // 'happy' (mutlu) ifadesini 100 üzerinden puanlıyoruz
          const score = Math.round(detections.expressions.happy * 100);
          setEnergyScore(score);

          if (score > 85 && !showDiscount) {
            setMessage("Harika Enerji! 🎉");
            setShowDiscount(true);
          }
        }
      }
    }, 500); // Saniyede 2 kere kontrol et (bilgisayarı yormamak için)
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-900 text-white rounded-xl shadow-2xl border border-cyan-500 max-w-lg mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4 text-cyan-400">Gençlik Enerjini Ölç!</h2>
      <p className="mb-4 text-gray-300">{message}</p>
      
      {/* Kamera Görüntüsü */}
      <div className="relative border-4 border-purple-500 rounded-lg overflow-hidden mb-6">
        <video 
          ref={videoRef} 
          autoPlay 
          muted 
          width="320" 
          height="240"
          onPlay={handleVideoPlay}
          className="bg-black"
        />
      </div>

      {/* Kontrol Butonları ve Skor */}
      {!isModelLoaded ? (
        <div className="animate-pulse text-cyan-500">Yapay Zeka Hazırlanıyor...</div>
      ) : (
        <button 
          onClick={startVideo}
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-6 rounded-full transition-all mb-4"
        >
          Kamerayı Başlat
        </button>
      )}

      {/* Enerji Barı */}
      <div className="w-full bg-gray-700 rounded-full h-6 mb-4 relative overflow-hidden">
        <div 
          className="bg-gradient-to-r from-purple-500 to-cyan-500 h-6 transition-all duration-300" 
          style={{ width: `${energyScore}%` }}
        ></div>
        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow-md">
          % {energyScore}
        </span>
      </div>

      {/* Ödül Ekranı */}
      {showDiscount && (
        <div className="mt-4 p-4 bg-purple-600 rounded-lg animate-bounce text-center">
          <p className="font-bold text-xl">Kazandın!</p>
          <p className="text-sm">Promosyon Kodu: <span className="bg-black px-2 py-1 rounded text-cyan-400">LUMINA20</span></p>
        </div>
      )}
    </div>
  );
}