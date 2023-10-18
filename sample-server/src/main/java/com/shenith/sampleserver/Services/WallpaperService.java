package com.shenith.sampleserver.Services;

import com.shenith.sampleserver.DAO.WallpaperDAO;
import com.shenith.sampleserver.Models.Wallpaper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Vector;
import java.util.stream.Collectors;

@Service
public class WallpaperService {

    @Autowired
    WallpaperDAO wallpaperDAO;
    public ResponseEntity<List<Wallpaper>> getAllWallpapers() {

        return  new ResponseEntity<>(wallpaperDAO.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<Wallpaper> getOneWallpaper(int id) {

        return new ResponseEntity<>(wallpaperDAO.findById(id).orElse(null),HttpStatus.OK);
    }

    public ResponseEntity<List<Wallpaper>> oneUsersWallpapers(int userId) {


        return new ResponseEntity<>(wallpaperDAO.findAll().stream()
                .filter(wallpaper -> wallpaper.getUserId()==userId).collect(Collectors.toList()),HttpStatus.OK);

    }

    public ResponseEntity<List<Wallpaper>> getWallpaperOnCate(String category) {
        return new ResponseEntity<>(wallpaperDAO.findAll().stream()
                .filter(wallpaper -> category.equals(wallpaper.getCategory())).collect(Collectors.toList()),HttpStatus.OK);

    }

    public ResponseEntity<Wallpaper> insertWallpaper(Wallpaper wallpaper) {
        return new ResponseEntity<>(wallpaperDAO.save(wallpaper),HttpStatus.CREATED);
    }

    public ResponseEntity<Wallpaper> updateWallpaper(Wallpaper wallpaper) {
        Wallpaper exchangeWallpaper = wallpaperDAO.findById(wallpaper.getId()).orElse(null);
        exchangeWallpaper.setWallpaperName(wallpaper.getWallpaperName());

        exchangeWallpaper.setCategory(wallpaper.getCategory());
        exchangeWallpaper.setWDescription(wallpaper.getWDescription());
        wallpaperDAO.save(exchangeWallpaper);

        return new ResponseEntity<>(exchangeWallpaper,HttpStatus.OK);
    }

    public String deleteWallpaper(int id) {

        wallpaperDAO.deleteById(id);
            return "wallpaper "+id+" deleted";
    }

    public ResponseEntity<List<Wallpaper>> search(String searchKey) {
        if (searchKey==""){
            return new ResponseEntity<>( wallpaperDAO.findAll(),HttpStatus.CREATED);
        }
        return new ResponseEntity<>( wallpaperDAO.findByWallpaperNameContainingIgnoreCase(searchKey),HttpStatus.OK);
    }

}
