import React from 'react';

const Maps = () => {
  return (
    <>
    <div className="maps container-fluid">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.454933121987!2d12.83884447677738!3d55.87212278279448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653b5e6cdccb617%3A0xde50e6d76804ef44!2sBredgatan%203B%2C%20261%2035%20Landskrona!5e0!3m2!1ssv!2sse!4v1696755478896!5m2!1ssv!2sse"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </>
  );
}

export default Maps;
