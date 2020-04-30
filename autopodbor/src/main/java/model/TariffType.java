package model;

public enum TariffType {

	singleCheck("������� �������� ����"), forADay("������� �� ����"), fullConstruction("���� ��� ����");
	
	private String name;

	private TariffType(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
