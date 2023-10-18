package com.shenith.sampleserver.Controllers;

import com.shenith.sampleserver.Models.Wallpaper;
import com.shenith.sampleserver.Services.WallpaperService;
import jdk.jfr.Category;
import org.hibernate.cfg.Environment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/wallpapers")
@CrossOrigin("http://localhost:3000")
public class WallpaperContraller {
    @Autowired
    WallpaperService wallpaperService;

    @Value("${image.upload.path}")
    private String uploadPath;

    @GetMapping("/all-wallpapers")
    public ResponseEntity<List<Wallpaper>> getAllWalpapers(){

        return wallpaperService.getAllWallpapers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Wallpaper> getOneWallpaper(@PathVariable int id){
        return wallpaperService.getOneWallpaper(id);
    }

    // find users wallpapers
    @GetMapping("/{userId}/my-wallpapers")
    public  ResponseEntity<List<Wallpaper>> oneUsersWallpapers(@PathVariable int userId){
        return wallpaperService.oneUsersWallpapers(userId);

    }
    // find wallpaper base on category
    @GetMapping("/categories/{category}")
    public ResponseEntity<List<Wallpaper>> getWallpaperOnCategory(@PathVariable String category){

        return wallpaperService.getWallpaperOnCate(category);
    }

    @PostMapping("/add")
    public ResponseEntity<Wallpaper> insertWallpaper(
                                                    @RequestParam("category") String category,
                                                     @RequestParam("userId") int userId,
                                                     @RequestParam("file") MultipartFile file) throws IOException {
        byte[] imageData = file.getBytes();
        Wallpaper wallpaper1 =new Wallpaper();
        wallpaper1.setWallpaperName(file.getOriginalFilename());
        wallpaper1.setUserId(userId);
        wallpaper1.setCategory(category);



        String fullPath = uploadPath + file.getOriginalFilename();

        try (FileOutputStream fos = new FileOutputStream(fullPath)) {
            fos.write(imageData);
        } catch (IOException e) {
            e.printStackTrace();

        }


        return wallpaperService.insertWallpaper(wallpaper1);
    }


    @PutMapping("/update")
    public ResponseEntity<Wallpaper> updateWallpaper(@RequestBody Wallpaper wallpaper){
        return wallpaperService.updateWallpaper(wallpaper);
    }

    @DeleteMapping("/delete/{id}")
    public String  deleteWallpaper(@PathVariable int id){

        return wallpaperService.deleteWallpaper(id);
    }

    @GetMapping("/search/{searchKey}")
    public ResponseEntity<List<Wallpaper>> serch(@PathVariable String searchKey){


        return  wallpaperService.search(searchKey);
    }


}
