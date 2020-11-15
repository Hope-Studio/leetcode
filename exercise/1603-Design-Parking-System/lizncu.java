class ParkingSystem {
    int site[];

    public ParkingSystem(int big, int medium, int small) {
        site = new int[]{big,medium,small};
    }
    
    public boolean addCar(int carType) {
        if(site[carType-1] > 0){
            site[carType - 1]--;
            return true;
        }
        return false;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * ParkingSystem obj = new ParkingSystem(big, medium, small);
 * boolean param_1 = obj.addCar(carType);
 */