<template>

  <div class="a">

  <section id="contact" class="contact">
    <div class="container" data-aos="fade-up">

<div class="section-title">
  <h2>Contact</h2>
</div>

<div class="container">
  <iframe width="100%" height="270" style="border:double 1px #0563bb;" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=270&amp;hl=en&amp;q=36.18880608375461,43.9709758758545+(My%20Business%20Name)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" allowfullscreen></iframe>
</div>
<br/>
<br/>

<div class="row mt-1">

  <div class="col-lg-4">
    <div class="info">
      <div class="address">
        <i class="bi bi-geo-alt"></i>
        <h4>Location:</h4>
        <p>Iraq, Erbil, Italian vellage</p>
      </div>

      <div class="email">
        <i class="bi bi-envelope"></i>
        <h4>Email:</h4>
        <p>m.abomayas@gmail.com</p>
      </div>

      <div class="phone">
        <i class="bi bi-phone"></i>
        <h4>Call:</h4>
        <p>+964 751 725 1839</p>
      </div>

    </div>

  </div>

  <div class="col-lg-8 mt-5 mt-lg-0">
    <form role="form" class="php-email-form"  method="POST">
      <div class="row">
        <div class="col-md-6 form-group">
                <input type="hidden" value="" name="id">
          <input  type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
        </div>
        <div class="col-md-6 form-group mt-3 mt-md-0">
          <input  type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
        </div>
      </div>
      <div class="form-group mt-3">
        <input   type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
      </div>
      <div class="form-group mt-3">
        <textarea  class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
      </div>
      <div class="my-3">
        <div class="loading">Loading</div>
        <div class="error-message"></div>
        <div class="sent-message">Your message has been sent. Thank you!</div>
      </div>
      <div class="text-center"><button class=""  type="submit" >SEND</button></div>

    </form>
  </div>

</div>

</div>
  </section><!-- End Contact Section -->
  </div>
</template>

<script>
</script>
