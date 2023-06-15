// The code was adapted from dreamfusion3d.github.io
if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

var videoPaths360 = [
  'a_Buddhist_monk.mp4',
  'a_Spanish_flamenco_dancer.mp4',
  'a_Texas_ranger.mp4',
  'a_ballerina.mp4',
  'a_Black_person_in_a_military_uniform.mp4',
  'a_blonde_woman_wearing_yoga_pants.mp4',
  'a_cowboy.mp4',
  'a_farmer.mp4',
  'a_female_gymnastics_athlete.mp4',
  'a_high-school_janitor.mp4',
  'a_hipster_man.mp4',
  'a_karate_master_wearing_a_Black_belt.mp4',
  'a_male_gymnastics_athlete.mp4',
  'a_man_wearing_a_bomber_jacket.mp4',
  'a_man_wearing_a_jean_jacket_and_jean_trousers.mp4',
  'a_man_wearing_a_scarf.mp4',
  'a_man_wearing_a_white_tanktop_and_shorts.mp4',
  'a_man_wearing_motorcycle_clothes_and_a_Helmet.mp4',
  'a_man_wearing_pleated_trousers,_white_shirt_and_suspenders.mp4',
  'a_man_wearing_satin_pyjamas.mp4',
  'a_man_with_dreadlocks.mp4',
  'a_person_in_a_diving_suit.mp4',
  'a_track_and_field_athlete.mp4',
  'a_woman_wearing_an_oversized_jean_jacket.mp4',
  'a_woman_wearing_ski_clothes.mp4',
  'an_American_football_player.mp4',
  'an_Asian_woman_wearing_a_life_jacket.mp4',
  'an_Indian_Bride_dressed_in_traditional_clothes.mp4',
  'a_Medieval_European_King.mp4',
  'a_Mediterranean_man_with_a_beard_wearing_a_white_linen_shirt.mp4',
  'a_Roman_soldier_wearing_his_armor.mp4',
  'a_Viking.mp4',
  'a_bedouin_dressed_in_white.mp4',
  'a_Black_female_surgeon.mp4',
  'a_Black_man_wearing_a_green_t-shirt.mp4',
  'a_Black_man_wearing_a_red_baseball_cap.mp4',
  'a_Black_woman_dressed_in_gym_clothes.mp4',
  'a_Black_woman_in_a_wedding_dress.mp4',
  'a_Black_woman_wearing_a_hoodie.mp4',
  'a_Black_woman_wearing_sunglasses,_a_white_t-shirt_and_jeans.mp4',
  'a_body_builder_wearing_a_tanktop.mp4',
  'a_chef_dressed_in_white.mp4',
  'a_clown.mp4',
  'a_construction_worker.mp4',
  'a_female_doctor.mp4',
  'a_female_professor_wearing_a_regalia.mp4',
  'a_man_wearing_a_Christmas_sweater.mp4',
  'a_man_wearing_a_Hawaiian_shirt,_sunglasses_and_shorts.mp4',
  'a_man_wearing_a_camel_coat_and_a_hat.mp4',
  'a_man_wearing_a_hoodie.mp4',
  'a_man_wearing_a_kilt.mp4',
  'a_man_wearing_a_striped_shirt_and_white_linen_pants.mp4',
  'a_man_with_Black_hair_wearing_a_vest.mp4',
  'a_man_with_blond_hair_wearing_a_brown_leather_jacket.mp4',
  'a_member_of_a_rock_band.mp4',
  'a_ninja.mp4',
  'a_person_dresed_at_the_Venice_Carnival.mp4',
  'a_plus-size_model_wearing_pyjamas.mp4',
  'a_policewoman.mp4',
  'a_pregnant_person_of_color.mp4',
  'a_professional_boxer.mp4',
  'a_security_guard.mp4',
  'a_senior_Black_person_wearing_a_polo_shirt.mp4',
  'a_slim_man_wearing_a_navy_blazer_and_gray_trousers.mp4',
  'a_thin_Marathon_runner.mp4',
  'a_woman_in_a_hippie_outfit.mp4',
  'a_woman_in_traditional_Bavarian_clothing.mp4',
  'a_woman_wearing_a_long_dress.mp4',
  'a_woman_wearing_a_short_jean_skirt_and_a_cropped_top.mp4',
  'a_woman_wearing_a_skirt.mp4',
  'a_woman_wearing_a_wedding_dress.mp4',
  'a_woman_with_long_blond_hair.mp4',
  'a_young_man_wearing_a_turtleneck.mp4',
  'an_African_woman_dressed_in_traditional_clothes.mp4',
  'an_American_soldier_from_World_War_2.mp4',
  'an_Asian_man_wearing_a_navy_suit.mp4',
  'an_elderly_man_wearing_a_beige_suit.mp4',
  'an_elderly_person_wearing_a_waistcoat.mp4',

];

var videoPathsAnimations = ['a_man_with_blond_hair_wearing_a_brown_leather_jacket_rgb.mp4',
  'an_African_woman_dressed_in_traditional_clothes_rgb.mp4',
  'a_man_wearing_motorcycle_clothes_and_a_Helmet_rgb.mp4',
  'a_woman_in_traditional_Bavarian_clothing_rgb.mp4',
  'a_Black_woman_wearing_a_hoodie_rgb.mp4',
  'a_slim_man_wearing_a_navy_blazer_and_gray_trousers_rgb.mp4',
  'a_man_with_dreadlocks_rgb.mp4',
  'a_chef_dressed_in_white_rgb.mp4',
  'a_person_dresed_at_the_Venice_Carnival_rgb.mp4',
  'a_Black_woman_dressed_in_gym_clothes_rgb.mp4',
  'a_cowboy_rgb.mp4',
  'a_Black_man_wearing_a_red_baseball_cap_rgb.mp4',
  'a_body_builder_wearing_a_tanktop_rgb.mp4',
  'a_Black_man_wearing_a_green_t-shirt_rgb.mp4',
  'a_track_and_field_athlete_rgb.mp4',
  'a_female_professor_wearing_a_regalia_rgb.mp4',
  'a_Viking_rgb.mp4',
  'a_Black_person_in_a_military_uniform_rgb.mp4',
  'a_man_wearing_a_white_tanktop_and_shorts_rgb.mp4',
  'a_woman_wearing_ski_clothes_rgb.mp4',
  'a_man_wearing_a_bomber_jacket_rgb.mp4',
  'a_plus-size_model_wearing_pyjamas_rgb.mp4',
  'a_Spanish_flamenco_dancer_rgb.mp4',
  'a_Medieval_European_King_rgb.mp4',
  'a_ninja_rgb.mp4',
  'an_Asian_man_wearing_a_navy_suit_rgb.mp4',
  'an_American_soldier_from_World_War_2_rgb.mp4',
  'a_man_wearing_a_hoodie_rgb.mp4',
  'a_Black_woman_wearing_sunglasses,_a_white_t-shirt_and_jeans_rgb.mp4',
  'a_professional_boxer_rgb.mp4',
  'a_security_guard_rgb.mp4',
  'a_woman_wearing_a_short_jean_skirt_and_a_cropped_top_rgb.mp4',
  'a_woman_in_a_hippie_outfit_rgb.mp4',
  'a_clown_rgb.mp4',
  'a_Black_female_surgeon_rgb.mp4',
  'a_man_wearing_a_Hawaiian_shirt,_sunglasses_and_shorts_rgb.mp4',
  'a_man_wearing_a_Christmas_sweater_rgb.mp4',
  'a_man_wearing_satin_pyjamas_rgb.mp4',
  'a_woman_wearing_a_wedding_dress_rgb.mp4',
  'a_hipster_man_rgb.mp4',
  'a_person_in_a_diving_suit_rgb.mp4',
  'a_man_wearing_a_camel_coat_and_a_hat_rgb.mp4',
  'a_female_gymnastics_athlete_rgb.mp4',
  'a_policewoman_rgb.mp4',
  'a_blonde_woman_wearing_yoga_pants_rgb.mp4',
  'a_construction_worker_rgb.mp4',
  'a_young_man_wearing_a_turtleneck_rgb.mp4',
  'a_karate_master_wearing_a_black_belt_rgb.mp4',
  'a_man_wearing_a_striped_shirt_and_white_linen_pants_rgb.mp4',
  'a_woman_wearing_a_skirt_rgb.mp4',
  'a_senior_black_person_wearing_a_polo_shirt_rgb.mp4',
  'a_man_wearing_pleated_trousers,_white_shirt_and_suspenders_rgb.mp4',
  'a_high-school_janitor_rgb.mp4',
  'a_thin_Marathon_runner_rgb.mp4',
  'an_elderly_man_wearing_a_beige_suit_rgb.mp4',
  'a_man_wearing_a_scarf_rgb.mp4',
  'a_member_of_a_rock_band_rgb.mp4',
  'a_farmer_rgb.mp4',
  'a_Black_woman_in_a_wedding_dress_rgb.mp4',
  'a_man_with_black_hair_wearing_a_vest_rgb.mp4',
  'a_woman_wearing_a_long_dress_rgb.mp4',
  'a_bedouin_dressed_in_white_rgb.mp4',
  'a_female_doctor_rgb.mp4',
  'a_man_wearing_a_kilt_rgb.mp4',
  'a_pregnant_person_of_color_rgb.mp4'];

function make_video_grid(videoPaths, path, element_id, maxVideos) {
  shuffleArray(videoPaths);

// document.addEventListener("DOMContentLoaded", function() {
  var thumbnails = document.getElementById(element_id);
  var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  for (var i = 0; i < Math.min(videoPaths.length, maxVideos); i++) {
    var outer = document.createElement("DIV");
    outer.classList = "thumbnail outer card";
    var inner = document.createElement("DIV");
    inner.classList = "inner card-body";

    let videoPath = videoPaths[i];
    let caption = videoPath.replace('rgb', '').replace('.mp4', "").replaceAll(
      "_", " ");

    let captionShort = caption;

    var componentVideo = document.createElement("VIDEO");
    componentVideo.loop = true;
    componentVideo.playsinline = true;
    // componentVideo.preload = "metadata";
    componentVideo.muted = true;
    componentVideo.width = "300";
    componentVideo.autoplay = true;
    if (isIOS) {
      // Autoplay doesn't seem to work.
      componentVideo.classList = "video";
      componentVideo.src = path + videoPath;
      componentVideo.controls = true;
    } else {
      componentVideo.controls = false;
      componentVideo.classList = "video lazy";
      componentVideo.onmouseout = componentVideo.play;
      componentVideo.onmouseover = componentVideo.pause;
      componentSource = document.createElement("SOURCE")
      componentSource.type = "video/mp4"
      componentSource.setAttribute('src',
        path + videoPath);
      componentVideo.appendChild(componentSource);
    }
    inner.appendChild(componentVideo);

    var fullCaption = document.createElement("span");
    fullCaption.classList = "name invisible";
    fullCaption.appendChild(document.createTextNode(caption))
    inner.appendChild(fullCaption);

    var componentCaption = document.createElement("h6");
    componentCaption.classList = "caption";
    componentCaption.title = caption;
    componentCaption.appendChild(document.createTextNode(captionShort));
    inner.appendChild(componentCaption);

    outer.appendChild(inner);
    thumbnails.appendChild(outer);
  }
}
/*
make_video_grid(videoPaths360, "data/360_rgbn/", "thumbnails_360", 12);
make_video_grid(videoPathsAnimations, "data/animations/", "thumbnails_animations", 12);

make_video_grid(videoPaths360, "data/360_rgbn/", "thumbnails_360", 10000);
make_video_grid(videoPathsAnimations, "data/animations/", "thumbnails_animations", 10000);
*/
// }

