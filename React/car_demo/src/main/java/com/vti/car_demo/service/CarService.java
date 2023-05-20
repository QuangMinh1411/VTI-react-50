package com.vti.car_demo.service;

import com.vti.car_demo.entity.Car;
import com.vti.car_demo.exception.NotFoundException;
import com.vti.car_demo.repository.CarRepository;
import com.vti.car_demo.util.FileUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CarService {
    private final CarRepository carRepository;
    private final FileUtils fileUtils;

    public List<Car> getAllCars(){
        return carRepository.findAll();
    }



    public Car saveCar(MultipartFile file, String model, String maker){
        fileUtils.validateFile(file);
        try {
            String type = file.getContentType();
            Car car = new Car(type,model,maker,file.getBytes());
            return carRepository.save(car);
        } catch (Exception e) {
            throw new RuntimeException("Upload image error");
        }

    }

    public Car getCar(Integer id){
        return carRepository.findById(id).orElseThrow(()->{
            throw new NotFoundException("Not found car with id:" + id);
        });

    }

    public void deleteCar(Integer id){
        Car car = carRepository.findById(id).orElseThrow(()->{
            throw new NotFoundException("Not found car with id:" + id);
        });
        carRepository.delete(car);
    }

    public Car updateCar(Integer id,Car car){
        Car exist = getCar(id);
        exist.setMaker(car.getMaker());
        exist.setModel(car.getModel());
        carRepository.save(exist);
        return exist;
    }
}
